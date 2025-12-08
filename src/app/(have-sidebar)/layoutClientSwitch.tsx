import { ResponsiveSwitch } from "@/components";
import LayoutTablet from "./layoutTablet";
import LayoutMobile from "./layoutMobile";

export default function LayoutClientSwitch ({ children }: { children: React.ReactNode; }) {
    return (
        <ResponsiveSwitch 
            mobile={
                <LayoutMobile>
                    {children}
                </LayoutMobile>
            }
            tablet={
                <LayoutTablet>
                    {children}
                </LayoutTablet>
            }
        />
    );
}