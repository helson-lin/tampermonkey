<template>
    <div id="UCOPYROOT" class="bg-white box-border flex items-center justify-center rounded-full px-4 py-2 shadow-xl drop-shadow-xl animate-[wiggle_1s_ease-in-out]" v-if="show">
        <span class="text-sm text-gray-950">{{ message }}</span>
        <span class="bg-gray-200 rounded-full px-1 py-1 shadow-inner ml-2">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" class="w-3 h-3"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/></svg>
        </span>
    </div>
</template>
<script>
import mitter from '../mitter'
import { defineComponent, onMounted, ref, watch } from 'vue'
export default defineComponent({
    setup() {
        const show = ref(false)
        const message = ref('')
        const durationTime = ref(500)
        watch(show, (val) => {
            if (val) {
                setTimeout(() => {
                    show.value = false
                }, durationTime.value)
            }
        })
        onMounted(() => {
            mitter.on('open', ({ data, open, duration }) => {
                if (open) show.value = open
                if (data) message.value = data
                if (duration) durationTime.value = duration
            })
        })
        return {
            show,
            message
        }
    }
})
</script>
