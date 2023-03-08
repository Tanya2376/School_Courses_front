<template>
 <div class="account_content" :class="{ 'wide': opened_AcccountItem }">
    <!-- Элементы, показываемы при нажатии в leftAside -->
    <News
        v-if="showed_AccountItem==='news'"
    />
    <CoursesListVue
        v-if="showed_AccountItem==='courses_list'"
        :courseList = course_list
        :type = type
        @openCourse = openAccountItem
        @checkType = "change_type"
    />
    <Successes
        v-if="showed_AccountItem==='sucesses_list'"
        :courseList = course_list
        :Type = type
        @changeType="change_type"
        @showSuccessItem = openAccountItem
    />
    <!-- Тут ещё добавил смену типа ЕГЭ или ОГЭ -->
    <Homework
        v-if="showed_AccountItem==='homework_list'"
        @homework_item = openAccountItem
        @homework_item1 = openAccountItem
        :Type = type
        @changeType="change_type"
        
    />
    <ReitingUsers
        v-if="showed_AccountItem==='reiting_list'"
        
    />

    <!-- Компоненты, показываемые внутри account content -->
    <Course
        v-if="opened_AcccountItem==='course_item'"
        :id = id
        :type = type
    />
    <SuccessItem
        v-if="opened_AcccountItem==='success_item'"
        :id="id"
        :type = type
    />
    <!-- пропс можно не обязательно id называть, ведь я пехнул из Homework весь item а не только id -->
    <HomeworkItem
        v-if="opened_AcccountItem==='homework_item'"
        :id = id
        :type = type
    />
    <HomeworkItem1
        v-if="opened_AcccountItem==='homework_item1'"
        :type = type
    />
 </div>
</template>

<script>
import CoursesListVue from '@/components/PersonalAccount/templates/CoursesList/CoursesList.vue'
import Course from '@/components/PersonalAccount/templates/Course/Course.vue'
import News from '@/components/PersonalAccount/templates/News/News.vue'
import Successes from '@/components/PersonalAccount/templates/Successes/Successes.vue'
import SuccessItem from '@/components/PersonalAccount/templates/ObjectSuccess/ObjectSuccess.vue'
import Homework from '@/components/PersonalAccount/templates/Homework/Homework.vue'
import HomeworkItem from '@/components/PersonalAccount/templates/Homework/templates/homeworkItem.vue'
import HomeworkItem1 from '@/components/PersonalAccount/templates/Homework/templates/homeworkItem1.vue'
import ReitingUsers from '@/components/PersonalAccount/templates/Reiting/ReitingUsers.vue'
export default {
    name: "account-content",
    components: {
        CoursesListVue,Course, News, Successes, SuccessItem, Homework, HomeworkItem,HomeworkItem1,ReitingUsers 
    },
    props: {
        showedAccountitem: {
            type: String,
            required: true
        },
        openedAccountItem: {
            type: String,
            required: true
        },
        courseList: {
            type: Array,
            required: true
        },
        
        type: {
            type: String
        }
    },
    watch: {
        showedAccountitem: function() {
            this.showed_AccountItem = this.showedAccountitem
        },
        openedAccountItem: function() {
            this.opened_AcccountItem = this.openedAccountItem
        },
        courseList: function() {
            this.course_list = this.courseList
        }
    },
    data() {
        return {
            course_list: [],
            showed_AccountItem: 'news',
            opened_AcccountItem: '',
            id: 0
        }
    },
    methods: {
        openAccountItem(name, id) {
            this.$emit('openAccountItem', name)
            this.id = id
        },
        change_type(type) {
            this.$emit('change_type', type)
        }
    }
}
</script>

<style scoped>
.account_content {
    position: absolute;
    left: 400px;
    width:calc(100% - 400px);
    height: 100vh;
    padding: 20px;
    transition: 0.5s;
    overflow-y: scroll;
}

.wide {
    width:calc(100% - 200px);
    left: 200px;
}
</style>