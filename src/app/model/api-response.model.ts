export class ApiResponse<D>{
    public result: D;
    public error: string;
    public message: string;
    public code: string;

    constructor() { }
}