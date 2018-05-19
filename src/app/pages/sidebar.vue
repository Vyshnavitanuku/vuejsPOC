
<template>
    <div class="app_navigation-drawer app_navigation-drawer--fixed" style="height: 100%; margin-top: 64px; max-height: calc(100%); width: 300px;">
        <ul data-uid="5" class="list list--dense">
            <li>
                <a data-ripple="false" class="app_list__tile app_list__tile--link">
                    <div class="app_list__tile__action"><i aria-hidden="true" class="material-icons icon">dashboard</i></div>
                    <div class="">
                        <div class="">
                            <router-link to="/Home">{{$t("Reports", { defaultValue: 'Schedule Basis'})}}</router-link>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a data-ripple="false" class="app_list__tile app_list__tile--link">
                    <div class="app_list__tile__action"><i aria-hidden="true" class="material-icons icon">settings</i></div>
                    <div class="">
                        <div class="">
                            <router-link :to="{ name: 'settings-view' }">{{$t("Settings" , { defaultValue: 'Settings'})}}</router-link>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a data-ripple="false" class="app_list__tile list__tile--link">
                    <div class="app_list__tile__action"><i aria-hidden="true" class="material-icons icon">dashboard</i></div>
                    <div class="list__tile__content">
                        <div class="list__tile__title">
                            <router-link :to="{ name: 'employee-view' }">{{$t("Employee" , { defaultValue: 'Employee'})}}</router-link>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
        <div class="navigation-drawer__border"></div>
    </div>
</template>
