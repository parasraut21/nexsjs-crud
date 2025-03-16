import { Controller, Get, Post, Body, HttpCode, Put, Param, ParseIntPipe, Delete } from "@nestjs/common";
import { TaskService } from "./task.service";
import { Task } from "./task.model";

@Controller("/api/v1/tasks")
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @HttpCode(200)
  @Get("")
  findAll() {
    return this.taskService.findAll();
  }

  @HttpCode(201)
  @Post("/create")
  async createtask(@Body() task: Task) {
    return this.taskService.create(task);
  }

  @HttpCode(200)
  @Delete("/delete")
  async deleteTask(@Body() id: number) {
    
    return this.taskService.delete(id);
  }

  @HttpCode(200)
  @Put("/update")
  async updateTask(@Body() task: Task) {
    return this.taskService.update(task.id, task);
  }
}