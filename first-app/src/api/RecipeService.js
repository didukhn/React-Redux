import { BaseService, RequestType } from './BaseService';

export class RecipeService extends BaseService {
    constructor() {
        super('http://localhost:9000/api/');
    }

    getAll = () => {
        return this.call('recipes/', RequestType.GET);
    }

    getById = (id) => {
        return this.call(`recipes/${id}`, RequestType.GET);
    }

    create = (recipe) => {
        return this.call('recipes/', RequestType.POST, recipe);
    }

    update = (recipe) => {
        return this.call(`recipes/${recipe._id}`, RequestType.PATCH, {
            title: recipe.title,
            description: recipe.description,
            stars: recipe.stars
        });
    }

    delete = (id) => {
        return this.call(`recipes/${id}`, RequestType.DELETE);
    }
}