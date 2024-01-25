import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
  Button,
  Card,
  Kbd,
} from 'flowbite-react';
import { LayoutCardCart } from './LayoutCardCart';

export const TestAccordion = () => {
  return (
    <Accordion collapseAll className="bg-white">
      <AccordionPanel className="bg-teal-500">
        <AccordionTitle className="font-bold">
          Choose Your Ticket
        </AccordionTitle>
        <AccordionContent>
          <LayoutCardCart />
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  );
};
