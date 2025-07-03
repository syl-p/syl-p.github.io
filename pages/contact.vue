<template>
    <UContainer class="pt-24">
        <div class="flex space-x-6 justify-between py-24">
            <aside>
                <div class="mb-6">
                    <h2 class="text-gray-300 leading-relaxed">Email</h2>
                    <p>contact@websylvain.com</p>
                </div>
                <div class="mb-6">
                    <h2 class="text-gray-300 leading-relaxed">Phone</h2>
                    <p>07.61.74.17.02</p>
                </div>
                <div>
                    <h2 class="text-gray-300 leading-relaxed">Réseaux sociaux</h2>
                    <ul class="flex space-x-3">
                        <li>Facebook</li>
                        <li>Github</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </aside>
            <article>
                <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                    <UFormField label="Email" name="email">
                        <UInput v-model="state.email" />
                    </UFormField>

                    <UFormField label="Password" name="password">
                        <UInput v-model="state.password" type="password" />
                    </UFormField>

                    <UButton type="submit">
                        Envoyer
                    </UButton>
                </UForm>
            </article>
        </div>
    </UContainer>
</template>

<script lang="ts" setup>
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>