<template>
  <div>
    <div class="flex items-center gap-4">
      <!--      <lf-button type="secondary-ghost" class="!text-gray-500" @click="isDetailsModalOpen = true">-->
      <!--        <lf-icon name="circle-info" type="regular" />-->
      <!--        Details-->
      <!--      </lf-button>-->
      <el-tooltip
        content="Onboarding new data for GitHub is currently disabled due to some issues we are experiencing.
      Please contact support if you need to onboard new data or update settings."
        placement="top"
      >
        <span>
          <lf-button type="secondary" disabled @click="isSettingsDrawerOpen = true">
            <lf-icon name="link-simple" />
            Connect
          </lf-button>
        </span>
      </el-tooltip>
    </div>
    <lf-github-settings-drawer v-if="isSettingsDrawerOpen" v-model="isSettingsDrawerOpen" :integration="null" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LfButton from '@/ui-kit/button/Button.vue';
import LfIcon from '@/ui-kit/icon/Icon.vue';
import LfGithubSettingsDrawer from '@/config/integrations/github/components/settings/github-settings-drawer.vue';

const isSettingsDrawerOpen = ref(false);
</script>

<script lang="ts">
export default {
  name: 'LfGithubConnect',
};
</script>
