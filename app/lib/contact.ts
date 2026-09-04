export const contactEmail = "Cama5638@gmail.com";

export function makeContactDraft(input: { name: string; email: string; program: string; message: string }) {
  const name = input.name.trim();
  const body = [
    `Name: ${name}`,
    `Email: ${input.email.trim()}`,
    `Class: ${input.program.trim()}`,
    "",
    input.message.trim(),
  ].join("\n");

  return {
    body,
    href: `mailto:${contactEmail}?subject=${encodeURIComponent("Free class inquiry from " + name)}&body=${encodeURIComponent(body)}`,
  };
}
