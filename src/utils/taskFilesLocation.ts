export interface TaskFilesLocation {
    folderPath: string;
    scope: 'inbox' | 'project';
    projectName?: string;
    taskFolderName?: string;
}

const TASK_COLLECTIONS = new Set(['Tasks', 'Updates', 'Files']);

/**
 * Resolve a managed FJG Task Manager path to its matching Files area.
 *
 * Tasks, Updates, and Files are parallel collections. The workspace before
 * that collection determines whether the destination belongs to Inbox or to
 * a named project; the task folder beneath the collection is preserved.
 */
export function resolveTaskFilesLocationFromPath(path: string): TaskFilesLocation | null {
    const parts = normalizePathParts(path);

    if (parts[0] !== '08 Tasks') return null;

    if (parts[1] === 'Inbox') {
        return resolveCollectionLocation(parts, 2, {
            folderPath: '08 Tasks/Inbox/Files',
            scope: 'inbox',
        });
    }

    if (parts[1] === 'Projects' && parts[2]) {
        const collectionIndex = parts.findIndex((part, index) => index >= 3 && TASK_COLLECTIONS.has(part));
        if (collectionIndex < 0) return null;

        const projectPathParts = parts.slice(2, collectionIndex);
        const projectName = projectPathParts.join('/');
        const projectWorkspace = parts.slice(0, collectionIndex).join('/');
        return resolveCollectionLocation(parts, collectionIndex, {
            folderPath: `${projectWorkspace}/Files`,
            scope: 'project',
            projectName,
        });
    }

    return null;
}

function resolveCollectionLocation(
    parts: string[],
    collectionIndex: number,
    baseLocation: Omit<TaskFilesLocation, 'taskFolderName'>
): TaskFilesLocation | null {
    if (!TASK_COLLECTIONS.has(parts[collectionIndex])) return null;

    const taskFolderName = parts[collectionIndex + 1];
    if (!taskFolderName) return baseLocation;

    return {
        ...baseLocation,
        folderPath: `${baseLocation.folderPath}/${taskFolderName}`,
        taskFolderName,
    };
}

function normalizePathParts(path: string): string[] {
    return path
        .replace(/\\/g, '/')
        .split('/')
        .map((part) => part.trim())
        .filter(Boolean);
}
