"use client";

import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQItem } from "@/content/types";

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openValue, setOpenValue] = useState<string[]>([]);

  // Auto-expand the item a search result or shared link points at (e.g. /faq#faq-gx-cancel).
  useEffect(() => {
    function applyHashTarget() {
      const id = window.location.hash.slice(1);
      if (id && items.some((item) => item.id === id)) {
        setOpenValue([id]);
      }
    }
    applyHashTarget();
  }, [items]);

  if (items.length === 0) {
    return <p className="text-sm text-muted-foreground">등록된 질문이 없습니다.</p>;
  }

  return (
    <Accordion value={openValue} onValueChange={setOpenValue} className="space-y-2">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          id={item.id}
          className="scroll-mt-24 rounded-md border border-border bg-card px-4 last:border-border"
        >
          <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline sm:text-base">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
