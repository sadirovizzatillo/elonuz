<script>
export default {
    name: "IndexPage",
    data() {
        return {
            input: "",
            inputBase: "",
            inputLarge: "",
            checkbox: "",
            radio: "",
            switcher: "",
            locale: "",
            options: [
                { id: 1, name: "John" },
                { id: 2, name: "Jane" },
            ],
            selected: null,
        };
    },
    watch: {
        radio: {
            handler(value) {
                console.log(value);
            },
        },
        locale(value) {
            this.$router.push(this.switchLocalePath(value));
        },
    },
    methods: {
        handelClick(e) { },
    },
}
</script>

<template>
  <div>
    <div class="flex flex-col flex-wrap space-y-2 mb-4">
      <select v-model="locale">
        <option value="en">en</option>
        <option value="ru">ru</option>
        <option value="uz">uz</option>
      </select>
      <span>{{ $t('populargoods') }}</span>
      <BaseInput
        v-model="input"
        name="small-input"
        label="Small input"
        placeholder="Small..."
        size="small"
        clearable
        :show-message="false"
      />
      <BaseInput
        v-model="inputBase"
        name="large-input"
        label="Base input"
        placeholder="Base..."
        clearable
        type="password"
        show-password-on="mousedown"
        bordered
        error-message="This field is required"
      />
      <BaseInput
        name="large-input"
        label="Large input"
        placeholder="Large..."
        size="large"
        clearable
        error-message="Error message!"
        v-model="inputLarge"
      />
    </div>

    <hr class="bg-primary h-1" />

    <div class="inline-flex flex-wrap gap-6 py-5">
      <BaseCheckbox
        v-model="checkbox"
        label="Base (default-checked)"
        :default-checked="true"
      />
      <BaseCheckbox label="Small (disabled)" :disabled="true" size="small" />
      <BaseCheckbox label="Asterisk" type="asterisk" />
      <BaseCheckbox
        label="Asterisk (default-checked)"
        type="asterisk"
        :default-checked="true"
      />
      <BaseCheckbox
        label="Asterisk (disabled)"
        type="asterisk"
        :disabled="true"
      />
    </div>

    <hr class="bg-primary h-1" />

    <div class="inline-flex flex-wrap gap-6 py-5">
      <BaseRadio
        v-model="radio"
        label="Base radio 1"
        name="radio"
        value="radio1"
      />
      <BaseRadio
        v-model="radio"
        label="Base radio 2"
        name="radio"
        value="radio2"
      />
      <BaseRadio label="Base radio 3.1" name="radio2" value="radio3" />
      <BaseRadio
        label="Base radio 3.2"
        name="radio2"
        :default-checked="true"
        value="radio4"
      />
      <BaseRadio label="Base radio 4" :disabled="true" value="radio-3" />
    </div>

    <hr class="bg-primary h-1" />

    <div class="inline-flex flex-wrap gap-6 py-5">
      <div class="w-60">
        <BaseSwitcher v-model="switcher" label="Version 1 (Normal)" />
      </div>
      <div class="w-60">
        <BaseSwitcher
          label="Version 2 (default checked)"
          :default-checked="true"
        />
      </div>
      <div class="w-60">
        <BaseSwitcher label="Version 3 (disabled)" :disabled="true" />
      </div>
    </div>
    <hr class="bg-primary h-1" />

    <div class="inline-flex flex-wrap gap-6 py-5">
      <BaseLink to="/" text="Home page" prev />
      <BaseLink to="/" text="Home page" light />
      <BaseLink to="/" text="Home page" />
      <BaseLink to="/" text="Home page" next />
    </div>
    <hr class="bg-primary h-1" />
    <div class="inline-flex flex-wrap gap-6 py-5">
      <button
        class="w-50 h-10 rounded bg-secondary text-light-900"
        @click="
          $router.push({ ...$route, query: { ...$route.query, modal: true } })
        "
      >
        Open modal
      </button>
      <BaseModal title="Telefon raqam" adaptive="tablet">
        Super modal
      </BaseModal>
    </div>
    <hr class="bg-primary h-1" />
    <div class="inline-flex gap-6 py-5">
      <BasePagination v-model="page" :page-range="5" :page-count="15" />
      <p>{{ page }}</p>
    </div>
    <hr class="bg-primary h-1" />
    <div class="inline-flex items-center flex-wrap gap-6 p-5">
      <BaseButton size="tiny" type="info">tiny</BaseButton>
      <BaseButton size="small" type="info">smal</BaseButton>
      <BaseButton size="base" type="info">base</BaseButton>
      <BaseButton size="medium" type="info">medium</BaseButton>
      <BaseButton size="large" type="info">large</BaseButton>
      <BaseButton size="large" type="info"><span class="text-xs">Costum text size</span></BaseButton>
    </div>
    <div class="inline-flex items-center flex-wrap gap-6 p-5">
      <BaseButton type="info">info</BaseButton>
      <BaseButton type="primary">primary</BaseButton>
      <BaseButton type="warning">warning</BaseButton>
      <BaseButton type="error">error</BaseButton>
      <BaseButton type="tertiary">tertiary</BaseButton>
    </div>
    <div class="inline-flex items-center flex-wrap gap-6 p-5">
      <BaseButton type="info" secondary>info</BaseButton>
      <BaseButton type="primary" secondary>primary</BaseButton>
      <BaseButton type="warning" secondary>warning</BaseButton>
      <BaseButton type="error" secondary>error</BaseButton>
    </div>

    <section class="flex flex-col space-y-4">
      <BaseSelect
        v-model="selected"
        dark
        :options="options"
        placeholder="Small select"
        clearable
        size="small"
        option-label="name"
        option-value="id"
      />
      <BaseSelect
        v-model="selected"
        :options="options"
        placeholder="Default select"
        clearable
        option-label="name"
        option-value="id"
      />
      <BaseSelect
        v-model="selected"
        :options="options"
        placeholder="Large select"
        clearable
        option-label="name"
        option-value="id"
        size="large"
      />
    </section>
  </div>
</template>
