"use client"
import { Token } from "@worldcoin/mini-apps-ui-kit-react";
export default function TokenWrapper({ value, size = 40 }) {
    return (
        <Token value={value} size={size} />
    )

}

