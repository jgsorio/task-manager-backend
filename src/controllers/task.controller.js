const Task = require('../models/task.model');
const { z } = require('zod');

class TaskController {
    async all(_, response) {
        const tasks = await Task.find({});
        return response.json(tasks);
    }

    async store(request, response) {
        const bodySchema = z.object({
            description: z.string(),
            isCompleted: z.boolean().optional()
        });

        const body = bodySchema.safeParse(request.body);

        if (!body.success) {
            return response.status(400).json(z.treeifyError(body.error));
        }

        const task = await Task.create(body.data);
        return response.status(201).json(task);
    }

    async find(request, response) {
        const { id } = request.params;
        const task = await Task.findById(id);
        if (!task) {
            return response.status(404).json({ error: 'task not found' });
        }

        return response.json(task);
    }


    async update(request, response) {
        const { id } = request.params;
        const bodySchema = z.object({
            description: z.string(),
            isCompleted: z.boolean().optional()
        });

        const body = bodySchema.safeParse(request.body);

        if (!body.success) {
            return response.status(400).json(z.treeifyError(body.error));
        }

        const task = await Task.findByIdAndUpdate(id, body.data, { new: true });
        return response.json(task);
    }

    async delete(request, response) {
        const { id } = request.params;
        await Task.findByIdAndDelete(id);
        return response.status(204).json({});
    }
}

module.exports = new TaskController();
