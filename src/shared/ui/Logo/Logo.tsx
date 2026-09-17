import type { FC, SVGProps } from "react";
import DarkLogo from "./DarkLogo";
import LightLogo from "./LightLogo";

interface LogoProps extends SVGProps<SVGSVGElement> {
    size?: number;
    theme?: 'dark' | 'light';
}

export const Logo: FC<LogoProps> = ({ size = 40, theme }) => {
    const isDark = theme === 'dark' ? true : false;

    return (
        <span>
            {isDark ? <DarkLogo size={size} /> : <LightLogo size={size} />}
        </span>
    );
};