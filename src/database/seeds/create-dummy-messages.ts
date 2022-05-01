import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<any> {
    await knex('messages').insert([
        {
            id: "4f652410-147b-4f94-ac54-fd996d171769",
            message_name: "Chethana",
            message_category: "recent",
            created_at: new Date(),
            updated_at: new Date(),
        }
    ]);
}