<template>
    <div class="dialog" v-if="show" @click.stop="hideDialog">
        <div @click.stop class="dialog_content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import {body} from "@/main";

export default {
    name: "my-dialog",
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        show: function() {
            if(this.show===true) {
                body[0].classList.add("lock");
            }
        }
    },
    methods: {
        hideDialog() {
            body[0].classList.remove("lock");
            this.$emit('update:show', false)
        }
    }
}
</script>

<style scoped>
.dialog {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    display: flex;
    background: rgba(0, 0, 0, 0.5);
    z-index: 100;
    overflow-y: scroll;
}

.dialog_content {
    margin: auto;
    background-color: white;
    border-radius: 12px;
    padding: 20px;
}
.p0 {
    padding: 0;
}
</style>