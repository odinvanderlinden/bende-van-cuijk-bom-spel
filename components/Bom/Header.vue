<template>
  <header class="header shadow-sm flex justify-end items-center">
    <Dialog>
      <DialogTrigger>
        <Button variant="outline" size="icon" class="mr-4">
          <Icon name="material-symbols:mail-rounded" />
          <span
            class="ml-1 bg-red-600 text-white rounded-full px-1"
            v-if="data?.containsUnreadMessages"
          >
            {{ data?.messages.length }}
          </span>
          <span class="ml-1" v-else>{{ data?.messages.length }}</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle> Berichten van de bende van Cuijk </DialogTitle>
        </DialogHeader>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem
              v-for="bericht in data?.messages"
              :key="bericht.id"
              :value="bericht.id"
            >
              <AccordionTrigger>{{ bericht.title }}</AccordionTrigger>
              <AccordionContent v-html="bericht.message"></AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </DialogContent>
    </Dialog>
  </header>
</template>
<script setup lang="ts">
import type { GetMessagesResponse, Message } from "@/types/message";

const { data } = await useFetch<GetMessagesResponse>("/api/bom/messages", {
  headers: {
    "Cache-Control": "no-cache",
  },
});
</script>
<style>
.header {
  height: 7%;
  width: 100vw;
}
</style>
