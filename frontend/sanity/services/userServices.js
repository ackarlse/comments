import { client } from "../client";

export async function fetchAllUsers() {
  const data = await client.fetch(`*[_type == 'users']
                {_id,
                name,
                "image": image.asset -> url,
                "slug": slug.current
            }`);
  return data;
}

export async function fetchUserBySlug(slug) {
  const data = await client.fetch(
    `*[_type == 'users' && slug.current == $slug]{
                _id,
                name,
                "image": image.asset -> url,
                slug
            }`,
    { slug }
  );
  return data;
}
/*En fetch som henter en bruker basert på id, denne er foreløpelig statisk*/
export async function fetchUserById() {
  const data = await client.fetch(
    `*[_type == "users" && _id == "06a12549-8dc0-40ac-9d76-cc5acda309a5"]`
  );
  return data;
}

/*TODO: Skrive en fetch funksjon for å hente alle kommentarerene en bruker har gjort på et produkt */
export async function fetchAllFromUser(id) {
  const data = await client.fetch(
    `*[_type == 'products' && count(comments[user._ref == $id]) > 0]{
  name,
  "comments": comments[user._ref == $id]{
    comment
  }
}`,
    { id }
  );
  return data;
}
