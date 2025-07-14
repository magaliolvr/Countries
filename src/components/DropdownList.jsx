function DropdownList({ options, onChange }) {
  return (
    <select className="padding-s border-radius-m font-l" onChange={onChange}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export default DropdownList;
