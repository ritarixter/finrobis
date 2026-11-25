# Finorbis UI Kit

The UI Kit implements the reusable application controls from Figma nodes
`115:4078`, `115:4431`, and `127:5794`. Import public APIs only from:

```tsx
import {
  Badge,
  Button,
  CodeInput,
  DateField,
  DropdownItem,
  DropdownMenu,
  FieldGrid,
  Icon,
  IconButton,
  InputField,
  Modal,
  NavigationButton,
  SelectField,
  Switch,
  Tabs,
  TextareaField,
} from "~/components/ui";
```

## Components

- `Button`: `appearance` = `primary | secondary | ghost | filled | danger`;
  `size` = `xs | sm | md | lg`; supports icons, full width, active,
  loading, and disabled. The legacy `ThemeButton` API remains supported.
- `IconButton`: circular icon action with configurable control and icon sizes.
  `label` is required for accessibility.
- `NavigationButton`: full-width sidebar item with icon, active, expanded,
  and badge states.
- `ActionButton`: action/tab/pill variants from the application screens.
- `LinkButton` and `SortButton`: inline references and table sorting.
- `InputField`, `SelectField`, `TextareaField`, `DateField`: fluid-width
  labeled fields with helper, required, action, error, focus, hover, and
  disabled states.
- `FieldGrid`: responsive 1–3 column field layout; collapses to one column.
- `Switch`: controlled or uncontrolled native checkbox with a visual switch.
- `DropdownMenu` and `DropdownItem`: account/action menus. Menu header/items
  accept external layout classes; item icon size is configurable.
- `Tabs`: `segmented | underline | group`; controlled or uncontrolled,
  keyboard accessible, optionally full width.
- `CodeInput`: configurable OTP length with paste, arrows, backspace,
  controlled/uncontrolled values, and completion callback.
- `Badge`: status tones matching pending, completed, failed, processing,
  reversed, rejected, and verified states.
- `Modal`: responsive dialog with a required title, close icon and Close
  button. Content is passed through `children`; the title icon and primary
  action are optional. It traps focus, closes on Escape or overlay click, and
  restores focus to the trigger.
- `Icon`: typed registry backed by individual SVG files in
  `app/assets/ui-icons/`.

## Field example

```tsx
<FieldGrid columns={2}>
  <SelectField
    label="Currency"
    required
    value={currency}
    onChange={(event) => setCurrency(event.target.value)}
    options={currencies}
  />
  <InputField
    label="Gross amount"
    required
    inputMode="decimal"
    helperText="Available balance 41.50832000 ETH"
    action={<button type="button">MAX</button>}
  />
</FieldGrid>

<TextareaField
  label="Notes / Instructions"
  maxLength={220}
  showCount
/>
```

## Modal example

```tsx
<Modal
  open={isOpen}
  title="Add Beneficiary Bank Account"
  titleIcon="payments"
  onClose={() => setIsOpen(false)}
  action={() => saveBeneficiary()}
  actionText="Save"
>
  <BeneficiaryForm />
</Modal>
```

## Rules

- Controls are fluid by default. Constrain them in their parent layout, never
  by changing an internal fixed width.
- Pass all content and behavior through props; no page-specific labels or data
  belong inside UI Kit components.
- Prefer semantic native controls. Keep focus-visible styling and accessible
  names intact.
- Add icons as standalone SVG assets and register them in `Icon/iconAssets`.
- Extend existing components instead of creating visually duplicated controls.
