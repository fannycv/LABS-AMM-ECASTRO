class Location {
  double latitude;
  double longitude;

  Location({required this.latitude, required this.longitude});

  Location.fromJson(Map<String, dynamic> json)
      : latitude = json['latitude'],
        longitude = json['longitude'];

  Map<String, dynamic> toJson() => {
        'latitude': latitude,
        'longitude': longitude,
      };
}

class Task {
  String title;
  bool done;
  Location? location;

  Task(this.title, {this.done = false, this.location});

  Task.fromJson(Map<String, dynamic> json)
      : title = json['title'],
        done = json['done'],
        location = json['location'] != null
            ? Location.fromJson(json['location'])
            : null;

  Map<String, dynamic> toJson() => {
        'title': title,
        'done': done,
        'location': location?.toJson(),
      };
}
