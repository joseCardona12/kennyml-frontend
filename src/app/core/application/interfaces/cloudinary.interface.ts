export interface ICloudinary {
    asset_id: string;
    public_id: string;
    version: number;
    version_id: string;
    signature: string;
    width: number;
    height: number;
    format: string;
    resource_type: "image";
    created_at: string;
    tags: string[];
    bytes: number;
    type: "upload" | "private";
    etag: string;
    url: string;
    secure_url: string;
    original_filename: string;
    folder: string;
    public: boolean;
    headers?: {
        [key: string]: string;
    };
}
