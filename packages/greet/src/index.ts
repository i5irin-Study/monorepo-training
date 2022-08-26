export type Person = {
  name: string;
};

export function greet(guest: Person): string {
  return `Hey ${guest.name}`;
}
