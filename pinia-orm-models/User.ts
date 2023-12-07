import { Model } from 'pinia-orm'
import { Attr, Uid } from 'pinia-orm/dist/decorators'

export class User extends Model {
  static entity = 'users'
  static primaryKey = 'id'

  // fields
  @Uid() declare id: string
  @Attr() declare name: string | null
  @Attr() declare age: number | null
  @Attr() declare is_active: boolean | null
  @Attr() declare date_of_birth_date_time_tz: string | null
}
