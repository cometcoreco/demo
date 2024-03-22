/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/q78qlbK
 */
import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"
import { CardContent, Card } from "@/components/ui/card"

export function FAQ() {
  return (
    <Accordion className="w-full mt-4" type="multiple">
      <AccordionItem value="item-0">
        <AccordionTrigger className="hover:underline-none">
          What is OpenAssistantGPT?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          OpenAssistantGPT is an advanced chatbot solution designed to answer questions, assist with navigating our website, and provide information to users in real-time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:underline-none">
          What are OpenAI assistants?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          The Assistants is designed to help developers build powerful AI assistants capable of performing a variety of tasks.
          Find more information <a href="https://platform.openai.com/docs/assistants/how-it-works" className="underline">here</a>.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="hover:underline-none">
          How does the chatbot addapt to the website?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          We use custom crawlers that we created to extract the content then this content is used to train the chatbot.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="hover:underline-none">
          Is OpenAssistantGPT always available?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          Yes, OpenAssistantGPT is available 24/7 to assist with any questions you might have at any time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="hover:underline-none text-left">
          What kind of questions can I ask OpenAssistantGPT?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          You can ask OpenAssistantGPT about website navigation, services offered, troubleshooting, and more. It&apos;s here to ensure you find the information you need.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="border-b-0" value="item-5">
        <AccordionTrigger className="hover:underline-none text-left">
          Does OpenAssistantGPT replace human customer service?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          OpenAssistantGPT complements our human customer service by handling straightforward questions and issues, allowing our human team to focus on more complex inquiries.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
