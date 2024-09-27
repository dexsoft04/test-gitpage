import { CSSProperties, ReactNode } from '../../../../node_modules/react';

export type AlertProps = {
    message?: ReactNode;
    type: 'basic' | 'outline' | 'warning' | 'info' | 'success' | 'error';
    onClose?: (e: any) => void;
    description?: ReactNode;
    showIcon?: boolean;
    closable?: boolean;
    className?: string;
    style?: CSSProperties;
};
export declare const Alert: ({ type, closable, message, description, showIcon, onClose, ...props }: AlertProps) => import("react/jsx-runtime").JSX.Element | null;