<template>
       <div >
                <h1>这是App组件</h1>
                <router-link to="/test">test</router-link>
                <router-link to="/index">index</router-link>
                    <router-view ></router-view>
       </div>
                
</template>
<script>
export default {
    
}
</script>
