export interface AuthResponseData {
    displayName?: string;
    email: string;
    expiresIn: string;
    idToken: string;
    kind?: string;
    localId: string;
    refreshToken: string;
    registered?: boolean;
}