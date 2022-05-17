<template>
  <v-container>
    <v-row>
      <v-container>
        <v-card class="mx-auto">
          <v-card-title>Card Example</v-card-title>
          <v-card-subtitle> Are you sure you want to save? </v-card-subtitle>
          <v-card-text>Here is some information</v-card-text>
          <v-card-actions>
            <v-btn color="orange" text> Cancel </v-btn>
            <v-btn color="orange" text> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-row>
    <v-row>
      <v-container>
        <MCardStart />
      </v-container>
    </v-row>
    <v-row>
      <v-container>
        <div class="mx-auto v-card v-sheet theme--light">
          <div class="v-card__title">Card Example</div>
          <div class="v-card__subtitle">Are you sure you want to save?</div>
          <div class="v-card__text">Here is some information</div>
          <div class="v-card__actions">
            <button
              type="button"
              class="
                v-btn v-btn--text
                theme--light
                v-size--default
                orange--text
              "
            >
              <span class="v-btn__content"> Cancel </span></button
            ><button
              type="button"
              class="
                v-btn v-btn--text
                theme--light
                v-size--default
                orange--text
              "
            >
              <span class="v-btn__content"> Save </span>
            </button>
          </div>
        </div>
      </v-container>
    </v-row>
    <v-row>
      <v-container>
        <MCard>
          <MCardTitle>This is a title</MCardTitle>
          <MCardBody>This Is the boedy</MCardBody>
          <MCardActions>
            <button
              type="button"
              class="
                v-btn v-btn--text
                theme--light
                v-size--default
                orange--text
              "
            >
              <span class="v-btn__content"> Cancel </span></button
            ><button
              type="button"
              class="
                v-btn v-btn--text
                theme--light
                v-size--default
                orange--text
              "
            >
              <span class="v-btn__content"> Save </span>
            </button>
          </MCardActions>
        </MCard>
      </v-container>
    </v-row>
  </v-container>
</template>
<script>
import MCardStart from "../components/MCardStart";
import MCard from "../components/MCard.vue";
import MCardBody from "../components/MCardBody.vue";
import MCardTitle from "../components/MCardTitle.vue";
import MCardActions from "../components/MCardActions.vue";
export default {
  components: {
    MCardStart,
    MCard,
    MCardBody,
    MCardTitle,
    MCardActions,
  },
};
</script>

