<template>
  <div class="general-container pt-10">
    <v-row>
      <v-col cols="12" class="dashboard-list" align="center" justify="center">
        <div
          v-for="dashboard in dashItems"
          :key="dashboard.id"
          class="dashboard-item ma-4"
        >
          <!-- Componente de tarjeta de dashboard -->
          <Card
            :name="dashboard.name"
            :route="dashboard.route"
            :description="dashboard.desc"
            :icon="dashboard.icon"
            :section="dashboard.section"
            :id="dashboard.id"
            class="text-center py-4"
          ></Card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Card from "./Card";
export default {
  name: "Dashboard",
  data: () => ({
    dashItems: [
      { id: "dash1", 
        name: "Users", 
        desc: "", 
        icon: "mdi-account-group", 
        route: "Users",
        section: "Users",
        },
      {
        id: "dash2",
        name: "Shipments",
        desc: "",
        icon: "mdi-truck",
        route: "Shipments",
        section: "Shipments"
      },
      { id: "dash3", 
        name: "Comments", 
        desc: "", 
        icon: "mdi-message", 
        route: "Comments",
        section: "Comments",
      },
      {
        id: "dash4",
        name: "Commercial Allies",
        desc: "",
        icon: "mdi-handshake",
        route: "CommercialAllies",
        section: "CommercialAllies"
      },
      {
        id: "dash5",
        name: "Configuration",
        desc: "",
        icon: "mdi-cog",
        route: "Configuration",
        section: "Configuration"
      },
       {
        id: "dash6",
        name: "Discounts",
        desc: "",
        icon: "mdi-sale",
        route: "Discounts",
        section: "Discounts"
      },
    ],
  }),
  components: {
    Card,
  },
};
</script>

<style lang="scss">
@import "../../styles/main.scss";
</style>
