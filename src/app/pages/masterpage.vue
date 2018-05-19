<template>
    <div class="app theme--light">
        <div style="left: 12px; opacity: 0; top: 12px; z-index: 0; display: none;"><span>Source</span></div>
        <div>
            <headerbar></headerbar>
            <sidebar></sidebar>
            <div >
                <main  style="padding: 64px 0px 36px 300px;">
                    <div class="app_main">
                        <div>
                            <router-view/>
                        </div>
                    </div>
                </main>
            </div>
            <footer class="footer footer--fixed" style="padding-left: 0px; padding-right: 0px;"><span>© 2017</span></footer>
        </div>
    </div>
</template>
<script>
import headerbar from "./header";
import sidebar from "./sidebar";
export default {
  components: {
    headerbar,
    sidebar
  }
};
</script>
