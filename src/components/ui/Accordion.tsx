import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(itemId)
          ? prev.filter((id) => id !== itemId)
          : [...prev, itemId]
      );
    } else {
      setOpenItems((prev) =>
        prev.includes(itemId) ? [] : [itemId]
      );
    }
  };

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {items.map((item) => (
        <div key={item.id} className="py-3">
          <button
            onClick={() => toggleItem(item.id)}
            className="flex w-full items-center justify-between text-left"
          >
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {item.title}
            </span>
            <ChevronDown
              className={`h-5 w-5 text-gray-500 transition-transform ${
                openItems.includes(item.id) ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openItems.includes(item.id) && (
            <div className="mt-3 pr-12">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {item.content}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}