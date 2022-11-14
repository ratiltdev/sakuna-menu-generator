import { CookingInfoAdapter } from "../adapters/cookingInfoAdapter"
import { CookingInfo } from "../domain/entities/cookingInfo"

export const fetchCookingInfo = (adapter: CookingInfoAdapter): ReadonlyArray<CookingInfo> => adapter.fetch();