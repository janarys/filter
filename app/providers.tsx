"use client";

import "../i18n";
import { useEffect } from "react";
import { store } from "@/store";
import { useTranslation } from "react-i18next";

export function Providers({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const setLang = store((state) => state.setLang);
  const accept = store((state) => state.accept);

  useEffect(() => {
    // Hydrate lang
    const selectedLang = localStorage.getItem("lang");
    if (selectedLang) {
      i18n.changeLanguage(selectedLang);
      setLang(selectedLang);
    } else {
      i18n.changeLanguage("en");
    }

    // Hydrate accept
    const isAccept = localStorage.getItem("accept");
    if (isAccept) {
      accept();
    }
  }, [accept, i18n, setLang]);

  return <>{children}</>;
}
