<template>
  <div class="grid grid-cols-12 overflow-clip">
    <div class="col-start-3 col-end-8 h-full flex flex-shrink-0 justify-center items-center">
      <div>dsaidojsaidsaj</div>
    </div>
    <div class="testbg col-start-8 col-end-11 max-h-[80vh] overflow-y-scroll overscroll-y-contain flex flex-shrink-0 flex-col justify-start items-center">
        
      <SectionWrapper :title="t('labels.avatarShape')">
        <div class="h-[100px]">Content</div>
      </SectionWrapper>
      <div>
        <h3>Background Color</h3>
        <div class="h-[100px]">Content</div>
      </div>
      <div>
        <h3>Face</h3>
        <div class="h-[100px]">Content</div>
      </div>
      <div>
        <h3>Tops</h3>
        <div class="h-[100px]">Content</div>
      </div>
      <div>
        <h3>Ear</h3>
        <div class="h-[100px]">Content</div>
      </div>
      <div>
        <h3>Earrings</h3>
        <div class="h-[100px]">Content</div>
      </div>
      <div>
        <h3>Eyebrows</h3>
        <div class="h-[100px]">Content</div>
      </div>
      <div>
        <h3>Eyes</h3>
        <div class="h-[100px]">Content</div>
      </div>
      <div>
        <h3>Noses</h3>
        <div class="h-[100px]">Content</div>
      </div>
      <div>
        <h3>Glasses</h3>
        <div class="h-[100px]">Content</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionWrapper from '../components/SectionWrapper.vue'

const { t } = useI18n()

</script>