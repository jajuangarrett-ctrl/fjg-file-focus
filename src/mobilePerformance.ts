export interface MobilePerformancePolicyInput {
    enabled: boolean;
    isMobile: boolean;
    openViewOnStart: boolean;
    explicitlyOpened: boolean;
    mountedViewCount: number;
}

export interface MobilePerformancePolicy {
    active: boolean;
    attachViewOnLayoutReady: boolean;
    mountReactTree: boolean;
    buildFolderTreeRecursively: boolean;
    dispatchViewRefreshes: boolean;
}

export const getMobilePerformancePolicy = (input: MobilePerformancePolicyInput): MobilePerformancePolicy => {
    const active = input.enabled && input.isMobile;

    return {
        active,
        attachViewOnLayoutReady: input.openViewOnStart && !active,
        mountReactTree: !active || input.explicitlyOpened,
        buildFolderTreeRecursively: !active,
        dispatchViewRefreshes: !active || input.mountedViewCount > 0,
    };
};

type ScheduleTimeout = (callback: () => void, delayMs: number) => number;
type CancelTimeout = (timeoutId: number) => void;

export class DebouncedBatchQueue<T> {
    private readonly pendingItems = new Map<string, T>();
    private timeoutId: number | null = null;
    private readonly delayMs: number;
    private readonly getKey: (item: T) => string;
    private readonly onFlush: (items: T[]) => void;
    private readonly scheduleTimeout: ScheduleTimeout;
    private readonly cancelTimeout: CancelTimeout;

    constructor(
        delayMs: number,
        getKey: (item: T) => string,
        onFlush: (items: T[]) => void,
        scheduleTimeout: ScheduleTimeout = (callback, delay) => window.setTimeout(callback, delay),
        cancelTimeout: CancelTimeout = (timeoutId) => window.clearTimeout(timeoutId)
    ) {
        this.delayMs = delayMs;
        this.getKey = getKey;
        this.onFlush = onFlush;
        this.scheduleTimeout = scheduleTimeout;
        this.cancelTimeout = cancelTimeout;
    }

    enqueue(item: T): void {
        this.pendingItems.set(this.getKey(item), item);
        if (this.timeoutId !== null) this.cancelTimeout(this.timeoutId);
        this.timeoutId = this.scheduleTimeout(() => this.flush(), this.delayMs);
    }

    flush(): void {
        if (this.timeoutId !== null) {
            this.cancelTimeout(this.timeoutId);
            this.timeoutId = null;
        }
        if (this.pendingItems.size === 0) return;

        const items = Array.from(this.pendingItems.values());
        this.pendingItems.clear();
        this.onFlush(items);
    }

    clear(): void {
        if (this.timeoutId !== null) {
            this.cancelTimeout(this.timeoutId);
            this.timeoutId = null;
        }
        this.pendingItems.clear();
    }

    get size(): number {
        return this.pendingItems.size;
    }
}
