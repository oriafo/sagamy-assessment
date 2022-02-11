

export interface Login{
    BranchId: number;
    Username: string;
    Password : string;
    AppMode:string;
    $id?:number;
}

export interface Logout{
    sessionGuid: string;
}