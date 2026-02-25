import type { CartItem } from "@/components/CartContext";

export interface CheckoutData {
    name: string;
    mobile: string;
    address: string;
    city: string;
    pincode: string;
    notes?: string;
}

const WHATSAPP_NUMBER = "919032909043";

export function generateOrderMessage(
    data: CheckoutData,
    items: CartItem[],
    total: number
): string {
    const itemLines = items
        .map((item, index) => {
            const sizeLabel = item.menuItem.hasHalfFull
                ? ` (${item.size === "half" ? "Half" : "Full"})`
                : "";
            return `${index + 1} | ${item.menuItem.name}${sizeLabel} | ${item.quantity} | ₹${item.price * item.quantity}`;
        })
        .join("\n");

    const message = `🛒 Shiva's Kitchen Order

Name: ${data.name}

Address: ${data.address}

City: ${data.city}

Pincode: ${data.pincode}

Mobile: ${data.mobile}

--------------------------------
S.No | Item | Qty | Price
${itemLines}
--------------------------------

Total: ₹${total}

${data.notes ? `Notes: ${data.notes}\n\n` : ""}Please confirm my order. 🙏`;

    return message;
}

export function getWhatsAppUrl(message: string): string {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function redirectToWhatsApp(
    data: CheckoutData,
    items: CartItem[],
    total: number
): void {
    const message = generateOrderMessage(data, items, total);
    const url = getWhatsAppUrl(message);
    window.open(url, "_blank");
}
