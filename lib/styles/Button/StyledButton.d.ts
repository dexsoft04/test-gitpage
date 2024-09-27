import { Theme } from '../../utils/theme';

export declare const getSpinnerWhite: () => import('styled-components').RuleSet<object>;
export declare const getButtonBase: (theme: Theme) => import('styled-components').RuleSet<object>;
type ButtonSizeProps = {
    $size: string;
    theme: Theme;
};
export declare const getButtonSize: (props: ButtonSizeProps) => import('styled-components').RuleSet<object>;
export declare const getIconSize: (props: StyledButtonProps) => import('styled-components').RuleSet<object>;
export type ButtonVariantProps = {
    theme: Theme;
    disabled: boolean;
    $isLoading: boolean;
    $iconColor?: string;
};
export declare const getButtonVariantPrimary: (props: ButtonVariantProps) => import('styled-components').RuleSet<object>;
export declare const getButtonVariantSecondary: (props: ButtonVariantProps) => import('styled-components').RuleSet<object>;
export declare const getButtonVariantOutline: (props: ButtonVariantProps) => import('styled-components').RuleSet<object>;
export declare const getButtonVariantDestructive: (props: ButtonVariantProps) => import('styled-components').RuleSet<object>;
export declare const getButtonVariantLink: (props: ButtonVariantProps) => import('styled-components').RuleSet<object>;
export declare const getButtonVariantIcon: (props: ButtonVariantProps) => import('styled-components').RuleSet<object>;
export declare const getButtonVariantIconSecondary: (props: ButtonVariantProps) => import('styled-components').RuleSet<object>;
export declare const getButtonVariantIconOutline: (props: ButtonVariantProps) => import('styled-components').RuleSet<object>;
export declare const getButtonExpanded: () => import('styled-components').RuleSet<object>;
export declare const getButtonDisabled: () => import('styled-components').RuleSet<object>;
export declare const getButtonLoading: (props: StyledButtonProps) => import('styled-components').RuleSet<object>;
export declare const getButtonCircle: (props: StyledButtonProps) => import('styled-components').RuleSet<object>;
declare const StyledButton: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, StyledButtonProps>> & string;
export declare const getButtonGroupBase: () => import('styled-components').RuleSet<object>;
declare const StyledButtonGroup: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export type StyledButtonProps = {
    $size: string;
    $variant: string;
    disabled: boolean;
    $isCircle: boolean;
    $isExpanded: boolean;
    $isLoading: boolean;
    $iconColor?: string;
    $iconAfter?: string;
    $text?: string;
    theme: Theme;
};
export { StyledButton, StyledButtonGroup };
