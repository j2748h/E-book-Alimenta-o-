import React, { createContext, useContext, useState, useEffect } from "react";

interface PaymentContextType {
  paymentLink: string;
  setPaymentLink: (link: string) => void;
  isSimulatorOpen: boolean;
  setIsSimulatorOpen: (open: boolean) => void;
  triggerPurchase: () => void;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const PaymentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [paymentLink, setPaymentLinkState] = useState<string>("");
  const [isSimulatorOpen, setIsSimulatorOpen] = useState<boolean>(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedLink = localStorage.getItem("ebook_payment_link");
    if (savedLink && savedLink !== "COLOQUE_AQUI_SEU_LINK_DE_PAGAMENTO" && savedLink.trim() !== "") {
      setPaymentLinkState(savedLink);
    } else {
      setPaymentLinkState("https://dashboard.hoopay.com.br/product_affiliate/976c9ed7-1a56-4d4b-9802-29403d96d412");
    }
  }, []);

  const setPaymentLink = (link: string) => {
    setPaymentLinkState(link);
    localStorage.setItem("ebook_payment_link", link);
  };

  const triggerPurchase = () => {
    if (
      !paymentLink ||
      paymentLink.trim() === "" ||
      paymentLink.includes("COLOQUE_AQUI_SEU_LINK_DE_PAGAMENTO")
    ) {
      // Open the custom Checkout Simulator
      setIsSimulatorOpen(true);
    } else {
      // Redirect to their actual affiliate / checkout URL
      window.open(paymentLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <PaymentContext.Provider
      value={{
        paymentLink,
        setPaymentLink,
        isSimulatorOpen,
        setIsSimulatorOpen,
        triggerPurchase,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error("usePayment must be used within a PaymentProvider");
  }
  return context;
};
