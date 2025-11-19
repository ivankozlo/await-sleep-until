export type UntilOptions = {
    /**
     * How often the condition should be checked (ms)
     */
    interval?: number;
    /**
     * Maximum time to wait before giving up (ms).
     * If exceeded, the promise rejects with an Error.
     */
    timeout?: number;
};
declare function sleepFor(ms: number): Promise<void>;
declare function sleepUntil(condition: () => boolean | Promise<boolean>, options?: UntilOptions): Promise<void>;
declare function sleepAt(time: string | Date): Promise<void>;
export declare const sleep: {
    for: typeof sleepFor;
    until: typeof sleepUntil;
    at: typeof sleepAt;
};
export default sleep;
