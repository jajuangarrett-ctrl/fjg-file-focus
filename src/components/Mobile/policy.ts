export function useMobileOptimization(isMobile:boolean, enabled:boolean | undefined):boolean {
    return isMobile && enabled === true;
}
