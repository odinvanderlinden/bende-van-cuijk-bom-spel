<template>
  <form @submit="onSubmit">
    <div v-for="message in data?.messages">
      <FormField v-slot="{ componentField }" name="title">
        <FormItem>
          <FormLabel>Titel</FormLabel>
          <FormControl>
            <Input type="text" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="message">
        <FormItem>
          <FormLabel>Bericht</FormLabel>
          <FormControl>
            <Input type="text" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="timestamp">
        <FormItem>
          <FormLabel>Zichtbaarheidsdatum</FormLabel>
          <FormControl>
            <Input type="text" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
    </div>
    <Button class="bg-green-800" type="submit">Sla berichten op</Button>
  </form>
</template>
<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import type { GetMessagesResponse } from "@/types/message";
import { useForm } from "vee-validate";
const { data } = await useFetch<GetMessagesResponse>("/api/admin/messages");

const formSchema = toTypedSchema(
  z.object({
    title: z.string().min(1).max(50),
    message: z.string().min(2),
    timestamp: z.string(),
  })
);

const { handleSubmit } = useForm({
  validationSchema: formSchema,
  initialValues: {
    title: data.value?.messages[0].title,
    message: data.value?.messages[0].message,
  },
});

const onSubmit = handleSubmit((values) => {
  console.log("Form submitted!");
});
</script>
