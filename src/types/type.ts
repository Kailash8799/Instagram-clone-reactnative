export type CustomButtonType = {
    title: string;
    color?: string;
    loading?: boolean,
    borderRadius?: number;
    onClick: () => void;
};

export type ApiResponse = {
    StatusCode: number;
    Message: string;
    Success: boolean;
    Data: any;
}