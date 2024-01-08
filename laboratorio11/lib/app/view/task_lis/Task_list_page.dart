import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:laboratorio10/app/model/task.dart';
import 'package:laboratorio10/app/view/components/h1.dart';

import 'package:laboratorio10/app/view/components/shape.dart';
import 'package:shared_preferences/shared_preferences.dart';

class TaskListPage extends StatefulWidget {
  const TaskListPage({super.key});

  @override
  State<TaskListPage> createState() => _TaskListPageState();
}

class _TaskListPageState extends State<TaskListPage> {
  List<Task> taskList = [];

  @override
  void initState() {
    super.initState();
    initializeTasks();
  }

  Future<void> initializeTasks() async {
    final prefs = await SharedPreferences.getInstance();
    final taskStrings = prefs.getStringList('tasks');
    print(taskStrings);

    setState(() {
      taskList =
          taskStrings?.map((e) => Task.fromJson(jsonDecode(e))).toList() ?? [];
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Task List'),
        leading: GestureDetector(
          onTap: () {
            Navigator.of(context).pop();
          },
          child: Center(child: Text('Atrás')),
        ),
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: double.infinity,
            color: Theme.of(context).colorScheme.primary,
            child: Column(
              children: [
                const Row(children: [Shape()]),
                Column(
                  children: [
                    Image.asset('assets/images/tasks-list-image.png',
                        width: 120, height: 120),
                    const SizedBox(height: 16),
                    const H1('Completa tus tareas', color: Colors.white),
                  ],
                )
              ],
            ),
          ),
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 30, vertical: 25),
            child: H1('Tareas'),
          ),
          const SizedBox(
            height: 20,
          ),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 30),
              child: ListView.separated(
                  itemCount: taskList.length,
                  itemBuilder: (_, index) => _TaskItem(
                        taskList[index],
                        onTap: () {
                          taskList[index].done = !taskList[index].done;
                          setState(() {});
                        },
                      ),
                  separatorBuilder: (_, __) => const SizedBox(
                        height: 16,
                      )),
            ),
          )
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _showNewTaskModal,
        child: const Icon(Icons.add, size: 50),
      ),
    );
  }

  void _showNewTaskModal() {
    showModalBottomSheet(
        context: context,
        isScrollControlled: true,
        builder: (_) => _NewTaskModal(
              onTaskCreated: (Task task) async {
                setState(() {
                  taskList.add(task);
                });
                final prefs = await SharedPreferences.getInstance();

                prefs.setStringList('tasks',
                    taskList.map((e) => jsonEncode(e.toJson())).toList());
              },
            ));
  }
}

class _NewTaskModal extends StatelessWidget {
  _NewTaskModal({super.key, required this.onTaskCreated});

  final _controller = TextEditingController();
  final void Function(Task task) onTaskCreated;
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 33, vertical: 23),
      decoration: const BoxDecoration(
          borderRadius: BorderRadius.vertical(
            top: Radius.circular(21),
          ),
          color: Colors.white),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          H1('Nueva tarea'),
          const SizedBox(
            height: 26,
          ),
          TextField(
            controller: _controller,
            decoration: InputDecoration(
                filled: true,
                fillColor: Colors.white,
                border:
                    OutlineInputBorder(borderRadius: BorderRadius.circular(16)),
                hintText: 'Descripcion de la tarea'),
          ),
          const SizedBox(
            height: 26,
          ),
          ElevatedButton(
            onPressed: () {
              if (_controller.text.isNotEmpty) {
                final task = Task(_controller.text);
                onTaskCreated(task);
                Navigator.of(context).pop();
              }
            },
            child: Text("Guardar"),
          )
        ],
      ),
    );
  }
}

class _TaskItem extends StatelessWidget {
  const _TaskItem(this.task, {super.key, this.onTap});
  final Task task;
  final VoidCallback? onTap;
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Card(
          shape:
              RoundedRectangleBorder(borderRadius: BorderRadius.circular(21)),
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 21, vertical: 18),
            child: Row(
              children: [
                Icon(
                    task.done
                        ? Icons.check_box_rounded
                        : Icons.check_box_outline_blank,
                    color: Theme.of(context).colorScheme.primary),
                const SizedBox(
                  width: 10,
                ),
                Text(task.title),
              ],
            ),
          )),
    );
  }
}
