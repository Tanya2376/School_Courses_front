/**
 * Файл для регистрации глобальных компонентов.
 * Создаем в папке Common UI, которая будет переиспользована и записывавем сюда.
 */

import MyDialog from "@/components/Common/MyDialog.vue";
import MyInput from "@/components/Common/Input.vue";
import MyButton from "@/components/Common/MyButton.vue";
import MyStar from "@/components/Common/star.vue"

export default [
   MyDialog,
   MyInput,
   MyButton,
   MyStar
]