import { storiesOf } from "@storybook/vue";
import SimpleButton from "./SimpleButton";

storiesOf("SimpleButton", module).add("normal", () => ({
  components: { SimpleButton },
  template: `
      <SimpleButton
        :text="text"
        @click="pressed"
      />
    `,
  data: () => ({
    text: "click me"
  }),
  methods: {
    pressed() {
      console.log("You have clicked on the red button.");
    }
  }
}));
