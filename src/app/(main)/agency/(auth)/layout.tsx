import Background from "@/components/Background";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full flex items-center justify-center">
            <Background type="dot">{children}</Background>
        </div>
    );
};

export default AuthLayout;
