declare module "react-icons/*" {
    import { IconBaseProps } from "react-icons";
    interface IconType {
        (props: IconBaseProps): React.JSX.Element;
    }
}