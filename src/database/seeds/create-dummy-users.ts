import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<any> {
    await knex('users').insert([
        {
            id: "4f652410-147b-4f94-ac54-fd996d171769",
            user_name: "Pasindu",
            user_category: "Registered User",
            created_at: new Date(),
            updated_at: new Date(),
        }
    ]);
}