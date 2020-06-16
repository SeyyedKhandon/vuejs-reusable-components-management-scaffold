import { storiesOf } from "@storybook/vue";
import SimpleTableRow from "./SimpleTableRow";

storiesOf("SimpleTableRow", module).add("normal", () => ({
  components: { SimpleTableRow },
  template: `
      <SimpleTableRow
        :values="values"
      />
    `,
  data: () => ({
    values: ["SeyyedMahdi Hassanpour", "seyyedkhandon@gmail.com"]
  })
}));
