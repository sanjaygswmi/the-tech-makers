declare namespace CKEDITOR {
    interface EventPayload {
        data?: string;
        name?: string;
        [key: string]: unknown;
    }

    interface Editor {
        setData(data: string): void;
        getData(): string;
        on(event: string, handler: (event: EventPayload) => void): void;
        destroy(): void;
    }

    interface Static {
        instances: Record<string, Editor>;
        replace(id: string | HTMLElement, config?: Record<string, unknown>): Editor;
    }
}

declare global {
    interface Window {
        CKEDITOR?: CKEDITOR.Static;
    }
}
